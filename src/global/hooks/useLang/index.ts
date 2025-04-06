import { useLangStore } from '@/global/stores/lang/lang.store';
import { LangType } from '@/global/langs/_';

import { langs } from '@/global/langs';

export const useLang = <T>(
  selector?: (state: LangType, cur: string) => T,
): T => {
  const lang = useLangStore((state) => state.lang);

  return selector ? selector(langs[lang], lang) : langs[lang] as T;
};
