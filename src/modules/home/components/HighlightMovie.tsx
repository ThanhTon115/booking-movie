import React from 'react';
import { styles } from '../../../styles';
import { Rate } from 'antd';
import './styles.scss';
import XCarousel from '../../../components/XCarousel';
import { IntrinsicAttributes } from '../../../shared/types';
import { Movie } from '../../../interfaces';
import HighlightProduct from '../../product/components/HighlightProduct';

export type HighlightsType = IntrinsicAttributes & {
  modelValue?: Movie[];
};

const Highlights = (props: HighlightsType) => {
  const { modelValue: highlights } = props;
  return (
    <XCarousel className={`mx-auto ${props.className}`}>
      {highlights?.map((e, index) => <HighlightProduct modelValue={e} key={index} />)}
    </XCarousel>
  );
};
export default React.memo(Highlights);
