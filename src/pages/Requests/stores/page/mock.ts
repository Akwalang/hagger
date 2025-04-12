import { HttpMethod } from "@/global/enums/http-method.enum";

import { TabItem } from "./domains/tabs/types";

import { Group, RequestPage } from "./types";
import { PageType } from "./enums";

export const mockTabs = (): TabItem[] => [
  { pageId: '1' },
  { pageId: '2' },
  { pageId: '3' },
];

const createMockPage = (id: string, name: string): RequestPage => ({
  id: id,
  name: name,
  type: PageType.Request,
  data: {
    sourceId: null,
    request: {
      method: HttpMethod.Post,
      url: 'https://glitchgallery.org/support/:id/:slug?sort=asc&limit=10',
      headers: [
        {
          active: true,
          key: 'Content-Type',
          value: 'application/json',
          description: 'The MIME type of the body of the request (used with POST and PUT requests)',
          isRequired: false,
        },
        {
          active: true,
          key: 'Authorization',
          value: 'Bearer token',
          description: 'The authorization token for the request',
          isRequired: false,
        },
      ],
      cookies: [],
      params: {
        path: [
          { active: true, key: 'id', value: '123', description: 'The ID of the item', isRequired: true },
          { active: true, key: 'slug', value: 'example-slug', description: 'The slug of the item', isRequired: true }
        ],
        query: [
          { active: true, key: 'sort', value: 'asc', description: 'Sort order', isRequired: false },
          { active: true, key: 'limit', value: '10', description: 'Number of items to return', isRequired: false }
        ],
      },
      body: null,
    },
    response: {
      statusCode: '100',
      headers: [],
      data: new ArrayBuffer(0),
    }
  }
});

const createMockGroup = (id: string, name: string): Group => ({
  id: id,
  icon: 'icon',
  name: name,
  tabs: mockTabs(),
  pages: [
    createMockPage('1', 'Support page'),
    createMockPage('2', 'About us page'),
    createMockPage('3', 'Contact us page'),
  ],
  activePageId: '2',
});

export const mockGroups = [
  createMockGroup('1', 'main'),
];
