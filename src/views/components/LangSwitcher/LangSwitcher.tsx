import { Globe, Check } from 'lucide-react';

import { langs } from '@/global/langs';
import { useLang } from '@/global/hooks';
import { useLangStore } from '@/global/stores/lang/lang.store';

import * as Base from '@/views/ui/dropdown-menu';
import { Button } from '@/views/ui/button';

interface LangSwitcherProps {}

const Options: React.FC<{ cur: string }> = (props) => {
  const setLang = useLangStore((state) => state.setLang);

  return Object.entries(langs).map(([key, lang]) => {
    const name = lang.settings.lang.name();

    return (
      <Base.DropdownMenuItem key={key} onClick={() => setLang(key as any)}>
        <div className="w-full flex items-center justify-between">
          <span>{name}</span>
          <span>{props.cur === key && <Check size="16" />}</span>
        </div>
      </Base.DropdownMenuItem>
    );
  });
};

export const LangSwitcher: React.FC<LangSwitcherProps> = () => {
  const [lang, cur] = useLang((state, cur) => [state.settings.lang, cur]);

  return (
    <div className="h-full items-center flex">
      <Base.DropdownMenu>
        <Base.DropdownMenuTrigger asChild>
          <Button variant="link" size="sm" className="h-full flex p-0.5 shadow-none bg-transparent focus:outline-none hover:no-underline">
            <Globe className="text-foreground" size={14} />
            <div className="text-xs text-foreground">{lang.name()}</div>
          </Button>
        </Base.DropdownMenuTrigger>
        <Base.DropdownMenuContent align="end" className="w-[160px]">
          <Options cur={cur} />
        </Base.DropdownMenuContent>
      </Base.DropdownMenu>
    </div>
  );
};
