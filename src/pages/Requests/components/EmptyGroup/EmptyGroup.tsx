import { Art, ArtName } from '@/views/components';

import { ScrollArea } from "@/views/ui/scroll-area";

interface EmptyGroupProps {}

export const EmptyGroup: React.FC<EmptyGroupProps> = () => {
  return (
    <div className="flex items-center justify-center w-full h-full text-sm text-primary/50">
      <div className="flex flex-col items-center justify-center gap-2">
        <div
          className="flex [&_div]:w-[40px] [&_div]:h-[40px] mb-[20px] border-[1px] border-dashed border-foreground"
          onClick={(e) => {
            const bg = window.getComputedStyle(e.target as any).backgroundColor;

            var [, r, g, b] = /rgb\((\d+), (\d+), (\d+)\)/.exec(bg) || [];

            const hex = `#${((1 << 24) + (+r << 16) + (+g << 8) + +b).toString(16).slice(1)}`;

            navigator.clipboard.writeText(hex);
          }}
        >
          <div className="bg-background" />
          <div className="bg-foreground" />
          <div className="bg-card" />
          <div className="bg-card-foreground" />
          <div className="bg-popover" />
          <div className="bg-popover-foreground" />
          <div className="bg-primary" />
          <div className="bg-primary-foreground" />
          <div className="bg-secondary" />
          <div className="bg-secondary-foreground" />
          <div className="bg-muted" />
          <div className="bg-muted-foreground" />
          <div className="bg-accent" />
          <div className="bg-accent-foreground" />
          <div className="bg-destructive" />
          <div className="bg-destructive-foreground" />
          <div className="bg-border" />
          <div className="bg-input" />
          <div className="bg-ring" />
        </div>
        <div
          className="flex [&_div]:w-[40px] [&_div]:h-[40px] mb-[20px] border-[1px] border-dashed border-foreground"
          onClick={(e) => {
            const bg = window.getComputedStyle(e.target as any).backgroundColor;

            var [, r, g, b] = /rgb\((\d+), (\d+), (\d+)\)/.exec(bg) || [];

            const hex = `#${((1 << 24) + (+r << 16) + (+g << 8) + +b).toString(16).slice(1)}`;

            navigator.clipboard.writeText(hex);
          }}
        >
          <div className="bg-chart-1" />
          <div className="bg-chart-2" />
          <div className="bg-chart-3" />
          <div className="bg-chart-4" />
          <div className="bg-chart-5" />
          <div className="bg-sidebar" />
          <div className="bg-sidebar-foreground" />
          <div className="bg-sidebar-primary" />
          <div className="bg-sidebar-primary-foreground" />
          <div className="bg-sidebar-accent" />
          <div className="bg-sidebar-accent-foreground" />
          <div className="bg-sidebar-border" />
          <div className="bg-sidebar-ring" />
        </div>
        <div className="flex">
          <Art width="360px" ratio={1.4} name={ArtName.Landing} />
          {/* <Art width="240px" ratio={0.96} name={ArtName.BroomBattle} /> */}
          {/* <Art width="360px" ratio={1.18} name={ArtName.BroomBattle2} /> */}
          {/* <Art width="240px" ratio={0.72} name={ArtName.AlienMonocycle} /> */}
          {/* <Art width="360px" ratio={1.55} name={ArtName.Flamethrower} /> */}
          <Art width="170px" ratio={0.81} name={ArtName.Flamethrower2} />
          <Art width="220px" ratio={0.71} name={ArtName.Recreation} />
          {/* <Art width="280px" ratio={1.5} name={ArtName.Motorcycle} /> */}
          <Art width="340px" ratio={1.36} name={ArtName.Doubts} />
          {/* <Art width="300px" ratio={1.11} name={ArtName.Queen} /> */}
          {/* <Art width="160px" ratio={1.11} name={ArtName.RunAway} /> */}
          {/* <Art width="160px" ratio={0.78} name={ArtName.ChickenOut} /> */}
          {/* <Art width="220px" ratio={1.04} name={ArtName.Attack} /> */}
          {/* <Art width="220px" ratio={1.07} name={ArtName.Flying} /> */}
          {/* <Art width="220px" ratio={1.32} name={ArtName.Swimming} /> */}
          {/* <Art width="200px" ratio={1.37} name={ArtName.Defeated} /> */}
          {/* <Art width="240px" ratio={0.78} name={ArtName.Chase} /> */}
        </div>
      </div>
    </div>
  );
};
