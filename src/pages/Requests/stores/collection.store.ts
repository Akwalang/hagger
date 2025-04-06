import { create } from 'zustand';

type CollectionItem = {
  id: string;
  name: string;
  type: string;
  createdAt: number;
  updatedAt: number;
};

type CollectionGroup = {
  id: string;
  name: string;
  items: (CollectionGroup | CollectionItem)[];
  createdAt: number;
  updatedAt: number;
};

type CollectionSource = {
  id: string;
  name: string;
  type: 'custom' | 'swagger';
  items: (CollectionGroup | CollectionItem)[];
  createdAt: number;
  updatedAt: number;
};

interface State {
  sources: CollectionSource[];
}

interface Actions {
  addSource: (source: CollectionSource) => void;
}

export const useCollectionStore = create<State & Actions>((set) => ({
  sources: [],

}));
