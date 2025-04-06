import { cn } from '@/utils/react';
import { Separator } from '@/views/ui/separator';
import { SquarePlus, SquareMinus, BookMarked, Folder, File } from 'lucide-react';

const handler = () => console.log('Click!');

const data = {
  name: 'Root',
  expand: true,
  icon: () => <BookMarked size={16} />,
  handler,
  items: [
    {
      name: 'Child 1',
      expand: true,
      icon: () => <Folder size={16} />,
      handler,
      items: [
        { name: 'Grandchild 1 Grandchild 1 Grandchild 1', handler, expand: false, icon: () => <File size={16} /> },
        { name: 'Grandchild 2', handler, expand: false, icon: () => <File size={16} /> },
      ],
    },
    { name: 'Child 2', handler, expand: false, icon: () => <File size={16} /> },
    {
      name: 'Child 3',
      expand: true,
      icon: () => <Folder size={16} />,
      handler,
      items: [
        { name: 'Grandchild 1', handler, expand: false, icon: () => <File size={16} /> },
        {
          name: 'Grandchild 2',
          expand: true,
          icon: () => <File size={16} />,
          handler,
          items: [
            { name: 'Super child 1', handler, expand: false, icon: () => <File size={16} /> },
            { name: 'Super child 2', handler, expand: false, icon: () => <File size={16} /> },
          ],
        },
      ],
    },
  ],
};

interface TreeItem {
  name: React.ReactNode;
  expand: boolean;
  icon?: () => React.ReactNode;
  handler?: () => void;
  items?: TreeItem[];
}

interface TreeItemProps extends TreeItem {
  indent: number;
}

const IconWrapper: React.FC<{ className?: string, icon?: () => React.ReactNode }> = ({ className, icon }) => {
  if (!icon) return null;

  return <div className={cn("w-[16px] h-[16px] ml-1 flex items-center justify-center", className)}>{icon()}</div>;
}

const Offset: React.FC<{ indent: number }> = ({ indent }) => {
  if (indent < 1) return null;

  const icon = () => <div className="w-[5px] h-[5px] rounded-[50%] bg-foreground/20" />;

  return [...new Array(indent)].map((_, i) => <IconWrapper key={'i' + i} icon={icon} />);
}

const TreeItem: React.FC<TreeItemProps> = (props) => {
  return (
    <>
      <div className="flex items-center px-[10px] py-1.5 hover:bg-accent hover:text-accent-foreground" onClick={props.handler}>
        <Offset indent={props.indent} />
        {!!props.items?.length && <IconWrapper className="cursor-pointer" icon={() => props.expand ? <SquareMinus size={12} /> : <SquarePlus size={12} />} />}
        <IconWrapper icon={props.icon} />
        <span className={cn("text-sm ml-1 grow truncate", !!props.handler && "cursor-pointer")}>{props.name}</span>
      </div>
      {props.expand && props.items && props.items.map((item, index) => (
        <TreeItem key={index} {...item} indent={props.indent + 1} />
      ))}
    </>
  );
};

interface TreeProps {
}

export const Tree: React.FC<TreeProps> = (props) => {
  return (
    <div className="py-2">
      <TreeItem {...data} indent={0} />
      <Separator className="my-2" />
      <TreeItem {...data} indent={0} />
      <Separator className="my-2" />
      <TreeItem {...data} indent={0} />
    </div>
  );
};
