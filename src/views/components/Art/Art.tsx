import { cn } from '@/utils/react'
;
import { Composition } from './components/Composition/Composition';

import { ArtName } from './enums';

export { ArtName };

interface ArtProps extends React.HTMLAttributes<HTMLDivElement> {
  name: ArtName;
  width: string;
  ratio: number;
}

export const Art: React.FC<ArtProps> = (props) => {
  const { className, name, width, ratio, ...rest } = props;

  return (
    <div
      className={cn("flex items-center justify-center w-full h-full", className)}
      {...rest}
    >
      <div className="relative" style={{ width }}>
        <div style={{ paddingTop: 1 / props.ratio * 100 + "%" }} />
        <Composition name={props.name} />
      </div>
    </div>
  );
};
