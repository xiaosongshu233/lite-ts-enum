import { deepStrictEqual } from 'assert';
import { Mock } from 'lite-ts-mock'

import { Enum as Self } from './enum';
import { LoadHandlerBase } from './load-handler-base';

describe('src/enum.ts', () => {
    describe('.allItem', () => {
        it('ok', async () => {
            const mockHandler = new Mock<LoadHandlerBase>();
            const self = new Self('tt', mockHandler.actual, null);

            mockHandler.expected.handle(self, {});

            const res = await self.allItem;
            await self.allItem;
            deepStrictEqual(res, {});
        });
    });

    describe('.items', () => {
        it('ok', async () => {
            const self = new Self('tt', null, null);

            Reflect.set(self, 'm_AllItem', {
                a: 'aa',
                b: 'bb'
            });

            const res = await self.items;
            deepStrictEqual(res, ['aa', 'bb']);
        });
    });

    describe('.get(predicate: (entry: T) => boolean)', () => {
        it('ok', async () => {
            const self = new Self('tt', null, null);

            Reflect.set(self, 'm_AllItem', {
                a: {
                    value: 1
                },
                b: {
                    value: 2
                }
            });

            const res = await self.get(r => r.value == 2);
            deepStrictEqual(res, {
                value: 2
            });
        });
    });

    describe('.getReduce<TReduce>(typer: string)', () => {
        it('ok', async () => {
            const self = new Self('tt', null, null);

            Reflect.set(self, 'm_Reduce', {
                a: {
                    value: 1
                },
                b: {
                    value: 2
                }
            });

            const res = await self.getReduce('a');
            deepStrictEqual(res, {
                value: 1
            });
        });
    });
});