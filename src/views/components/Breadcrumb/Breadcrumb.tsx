import * as BaseBC from '../../ui/breadcrumb';
import * as BaseDM from '../../ui/dropdown-menu';

interface BreadcrumbProps {
  maxSize?: number;
  items: {
    name: React.ReactNode;
    link?: string;
    handler?: () => void;
  }[];
};

const split = (
  items: BreadcrumbProps['items'],
  maxSize: BreadcrumbProps['maxSize'],
): [BreadcrumbProps['items'], BreadcrumbProps['items']] => {
  if (items.length < maxSize) return [items, []];

  return [
    [items[0], ...items.slice(-1 * maxSize + 2)],
    items.slice(1, -1 * maxSize + 2),
  ];
};

export const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
  const children = [];

  const [visible, hidden] = split(props.items, props.maxSize || Infinity);

  for (const [i, item] of visible.entries()) {
    if (i) {
      children.push(<BaseBC.BreadcrumbSeparator key={'s' + i} />);
    }

    children.push(
      <BaseBC.BreadcrumbItem key={'i' + i}>
        {item.link ? <BaseBC.BreadcrumbLink href={item.link}>{item.name}</BaseBC.BreadcrumbLink> : item.name}
      </BaseBC.BreadcrumbItem>
    );

    if (i !== 0 || !hidden.length) continue;

    const ddItems = hidden.map((item, i) => {
      if (item.link) {
        return (
          <BaseDM.DropdownMenuItem key={'di' + i}>
            <a href={item.link}>
              {item.name}
            </a>
          </BaseDM.DropdownMenuItem>
        );
      }

      return (
        <BaseDM.DropdownMenuItem key={'di' + i}>
          {item.name}
        </BaseDM.DropdownMenuItem>
      );
    });

    children.push(<BaseBC.BreadcrumbSeparator key={'s' + i} />);

    children.push(
      <BaseBC.BreadcrumbItem key={'d' + i}>
        <BaseDM.DropdownMenu>
          <BaseDM.DropdownMenuTrigger className="flex items-center gap-1 shadow-none bg-transparent">
            <BaseBC.BreadcrumbEllipsis className="h-4 w-4" />
          </BaseDM.DropdownMenuTrigger>
          <BaseDM.DropdownMenuContent align="start">
            {ddItems}
          </BaseDM.DropdownMenuContent>
        </BaseDM.DropdownMenu>
      </BaseBC.BreadcrumbItem>
    );
  }

  return (
    <BaseBC.Breadcrumb>
      <BaseBC.BreadcrumbList>
        {children}
      </BaseBC.BreadcrumbList>
    </BaseBC.Breadcrumb>
  );
};
