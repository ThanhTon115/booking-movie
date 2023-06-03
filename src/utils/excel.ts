import {
  Workbook,
  Buffer,
  Style,
  CellValue,
  Borders,
  Border,
  Column,
  WorkbookView,
  CalculationProperties,
  WorkbookProperties,
} from "exceljs";

export type Position = {
  c: number;
  r: number;
};
export type ExcelBorders = Partial<Borders> & {
  outside?: Border;
};

export type ExcelStyle = Partial<Style> & {
  border?: ExcelBorders;
};

export type ExcelCell = {
  start: Position;
  end?: Position;
  value?: CellValue;
  numberFormat?: string;
  style?: ExcelStyle;
};

export type ExcelColumnDictionary = Record<string | number, Partial<Column>>;
export type ExcelColumns = Partial<Column>[];

export function convertObjectsToRows<T = Record<string, any>>(
  input: T[],
  keys?: Array<
    string | ((item: T, rowIndex?: number, columnIndex?: number) => unknown)
  >
): unknown[][] {
  if (!input?.length) {
    return [];
  }
  keys = keys || Object.keys(input[0]);

  return input.map((m, y) =>
    keys.map((k, x) => (typeof k === "function" ? k(m, y, x) : m[k]))
  );
}

const buildBorderStyle = (borders: ExcelBorders): Partial<Borders> => {
  if (!borders) {
    return undefined;
  }

  let borderTypes = Object.keys(borders);
  if (!borderTypes.length) {
    return undefined;
  }

  const hasOutsideBorder = borderTypes.includes("outside");
  if (!hasOutsideBorder) {
    return borders;
  }

  borderTypes = borderTypes.filter(
    (k) => !["top", "left", "bottom", "right", "outside"].includes(k)
  );

  return {
    ...borderTypes.reduce(
      (acc, k) => ({
        ...acc,
        [k]: borders[k],
      }),
      {}
    ),
    top: borders.outside,
    left: borders.outside,
    right: borders.outside,
    bottom: borders.outside,
  };
};

export type ExcelBuilderOptions = {
  category?: string;
  company?: string;
  creator?: string;
  description?: string;
  keywords?: string;
  lastModifiedBy?: string;
  created?: Date;
  manager?: string;
  modified?: Date;
  lastPrinted?: Date;
  properties?: WorkbookProperties;
  subject?: string;
  title?: string;
  /**
   * Workbook calculation Properties
   */
  calcProperties?: CalculationProperties;
  /**
   * The Workbook views controls how many separate windows Excel will open when viewing the workbook.
   */
  views?: WorkbookView[];

  sheetName?: string;
};

export const createExcelBuilder = (options?: ExcelBuilderOptions) => {
  const workbook = new Workbook();
  workbook.created = new Date();
  workbook.modified = new Date();
  workbook.lastPrinted = new Date();

  if (options) {
    Object.keys(options).forEach((k) => {
      if (k === "sheetName") {
        return;
      }

      if (
        (workbook as object).hasOwnProperty(k) &&
        typeof workbook[k] !== "function"
      ) {
        workbook[k] = k;
      }
    });
  }
  const worksheet = workbook.addWorksheet(options.sheetName || "Sheet 1");
  const write = (): Promise<Buffer> => {
    return workbook.xlsx.writeBuffer();
  };

  const useSheet = (name: string) => {
    if (worksheet.name === name) {
      return getSelf();
    }
    const sh = workbook.getWorksheet(name);

    return {
      ...getSelf(),
      worksheet: sh,
    };
  };

  const setColumn = (indexOrKey: number | string, value: Partial<Column>) => {
    const col = worksheet.getColumn(indexOrKey);
    Object.keys(value).forEach((k) => {
      if ((col as object).hasOwnProperty(k) && typeof col[k] !== "function") {
        col[k] = value[k];
      }
    });

    return getSelf();
  };

  const setColumns = (columns: ExcelColumns | ExcelColumnDictionary) => {
    if (Array.isArray(columns)) {
      worksheet.columns = columns;
    } else {
      Object.keys(columns).forEach((k) => {
        try {
          const index = parseInt(k, 10);
          setColumn(index, columns[k]);
        } catch {
          setColumn(k, columns[k]);
        }
      });
    }

    return getSelf();
  };

  const addCells = (cells: ExcelCell[], style?: ExcelStyle) => {
    cells.forEach((c) => {
      const rowPositions = [c.start.r, c.end?.r]
        .filter((v) => typeof v === "number")
        .sort((a, b) => a - b);
      const colPositions = [c.start.c, c.end?.c]
        .filter((v) => typeof v === "number")
        .sort((a, b) => a - b);

      const cell = worksheet.getCell(rowPositions[0], colPositions[0]);

      if (c.value) {
        cell.value = c.value;
      }

      if (style || c.style) {
        cell.style = {
          ...style,
          ...c.style,
          border: buildBorderStyle(style?.border || c.style?.border),
        };
      }
      if (c.numberFormat && typeof c.value === "number") {
        cell.numFmt = c.numberFormat;
      }

      if (c.end) {
        worksheet.mergeCells(
          rowPositions[0],
          colPositions[0],
          rowPositions[1],
          colPositions[1]
        );
      }

      if (c.end && c.start.c !== c.end.c) {
        return;
      }

      // set auto width
      const col = worksheet.getColumn(c.start.c);
      col.width = Math.max(estimateCellWidth(c), col.width || 0);
    });

    return getSelf();
  };

  const addRows = (rows: unknown[][]) => {
    worksheet.addRows(rows);
    return getSelf();
  };

  const getSelf = () => ({
    workbook,
    worksheet,
    write,
    useSheet,
    addRows,
    addCells,
    setColumns,
    setColumn,
  });

  return getSelf();
};

const estimateCellWidth = (c: ExcelCell): number => {
  let width = 4;
  if (c.value) {
    switch (typeof c.value) {
      case "string":
        width = c.value.length;
        break;
      case "number":
        width = c.numberFormat
          ? Math.max(c.value.toString(10).length, c.numberFormat.length)
          : c.value.toString(10).length;
        break;
      case "boolean":
        width = 7;
        break;
      case "object":
        width = c.value.toString().length;
        break;
    }
  }

  return width * 1.5;
};
