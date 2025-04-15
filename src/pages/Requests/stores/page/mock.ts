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
      url: 'https://glitchgallery.org/support/:id/:slug?sort=asc&limit=10&offset=0',
      headers: [
        {
          isPinned: false,
          isRemovable: true,
          isRequired: false,
          isNullable: false,
          isValid: true,

          active: [true, true],
          key: ['Content-Type', true],
          value: ['application/json', true],
          description: ['The MIME type of the body of the request (used with POST and PUT requests)', true],
        },
        {
          isPinned: false,
          isRemovable: true,
          isRequired: false,
          isNullable: false,
          isValid: true,

          active: [true, true],
          key: ['Authorization', true],
          value: ['Bearer token', true],
          description: ['The authorization token for the request', true],
        },
      ],
      cookies: [],
      params: {
        path: [
          {
            isPinned: true,
            isRemovable: false,
            isRequired: true,
            isNullable: false,
            isValid: true,

            active: [true, false],
            key: ['id', false],
            value: ['123', true],
            description: ['The ID of the item', true],

            example: '12345678-1234-1234-1234-123456789abc',
          },
          {
            isPinned: true,
            isRemovable: false,
            isRequired: true,
            isNullable: false,
            isValid: true,

            active: [true, false],
            key: ['slug', false],
            value: ['example-slug', true],
            description: ['The slug of the item', true],

            example: '931b7ed1f478',
          },
        ],
        query: [
          {
            isPinned: true,
            isRemovable: true,
            isRequired: false,
            isNullable: false,
            isValid: true,

            active: [true, true],
            key: ['sort', true],
            value: ['asc', true],
            description: ['Sort order', true],

            example: 'desc',
          },
          {
            isPinned: true,
            isRemovable: true,
            isRequired: false,
            isNullable: false,
            isValid: true,

            active: [true, true],
            key: ['limit', true],
            value: ['10', true],
            description: ['Number of items to return', true],

            example: '10',
          },
          {
            isPinned: true,
            isRemovable: true,
            isRequired: false,
            isNullable: false,
            isValid: true,

            active: [true, true],
            key: ['offset', true],
            value: ['0', true],
            description: ['Number of items to skip', true],

            example: '30',
          },
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
