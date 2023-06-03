import React from "react";
import { Tilt } from "react-tilt";
import { Variants, motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../HOC";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

export type CartProps = {
  variants?: Variants | undefined;
  slots?: any;
  useMotion?: Boolean;
  mousseTransition?: Boolean;
  tiltOptions?: {
    max: number;
    scale: number;
    speed: number;
  };
  className?: string;
  childrent?: string;
};
export const defaultVariants: Variants = fadeIn("up", "spring", 0, 0);
export const defaultTiltOptions = {
  max: 45,
  scale: 1,
  speed: 450,
};
export const cartPropsDefault: CartProps = {
  variants: defaultVariants,
  useMotion: true,
  mousseTransition: true,
  tiltOptions: defaultTiltOptions,
  className: "",
  slots: null,
  childrent: "",
};

const XCard = (props: CartProps) => {
  const {
    useMotion,
    variants,
    className,
    mousseTransition,
    tiltOptions,
    ...otherProps
  } = props;
  return (
    <motion.div
      variants={
        !useMotion ? defaultVariants : !variants ? variants : defaultVariants
      }
      className={className || ""}
    >
      {mousseTransition ? (
        <Tilt
          options={!tiltOptions ? tiltOptions : defaultTiltOptions}
          className="x-card"
        ></Tilt>
      ) : (
        <div className="x-card"></div>
      )}
    </motion.div>
  );
};

export default SectionWrapper(XCard, "");
