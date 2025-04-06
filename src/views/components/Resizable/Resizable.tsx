import { useDrag } from '@/global/hooks';
import { cn } from '@/utils/react';

interface ResizableFlexProps extends React.HTMLProps < HTMLDivElement > {
  width: number;
}

const Flex: React.FC<ResizableFlexProps> = (props) => {
  const { width, ...other } = props;

  const [displace, onMouseDown] = useDrag({
    onMouseDown: () => document.body.classList.add('cursor-ew-resize'),
    onMouseUp: () => document.body.classList.remove('cursor-ew-resize'),
  });

  return (
    <>
      <div style={{ width: props.width + displace[0] }} { ...other }>
        {props.children}
      </div>
      <div className="px-[5px] flex justify-stretch cursor-ew-resize" onMouseDown={onMouseDown}>
        <div className="w-[1px] bg-neutral-700" />
      </div>
    </>
  );
};

interface ResizableFillerProps extends React.HTMLProps<HTMLDivElement> {}

const Filler: React.FC<ResizableFillerProps> = (props) => {
  return (
    <div className={cn(props.className, 'grow text-center')}>
      {props.children}
    </div>
  );
};

interface ResizableProps extends React.HTMLProps<HTMLDivElement> {
  dir: 'horizontal' | 'vertical';
}

type Resizable = React.FC<ResizableProps> & {
  Flex: React.FC<ResizableFlexProps>,
  Filler: React.FC<ResizableFillerProps>,
};

export const Resizable = ((props) => {
  const { dir, className, ...other } = props

  const flexDir = {
    horizontal: 'flex-row',
    vertical: 'flex-col',
  }[props.dir];

  return (
    <div className={cn(className, flexDir, "w-full h-[350px] flex justify-stretch")} {...other}>
      {props.children}
    </div>
  );
}) as Resizable;

Object.assign(Resizable, { Flex, Filler });
