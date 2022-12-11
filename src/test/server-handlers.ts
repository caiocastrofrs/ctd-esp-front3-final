import { rest } from 'msw'
import comics from 'src/test/mocks/comics'
import character from 'src/test/mocks/character'
import comic from 'src/test/mocks/comic'
import comicsWithOffsetAndLimit from 'src/test/mocks/comicsWithOffsetAndLimit'
import comicWithoutStock from 'src/test/mocks/comicWithoutStock'

const handlers = [
  rest.get('/marvel/api/comics', async (req, res, ctx) => {
    const query = req.url.searchParams
    if (query.get('offset') === '10' && query.get('limit') === '5') {
      return await res(ctx.json(comicsWithOffsetAndLimit))
    }
    return await res(ctx.json(comics))
  }),
  rest.get('/marvel/api/comics/:id', async (req, res, ctx) => {
    const id = req.params.id
    if (id === '1') return await res(ctx.json({ data: { results: [comic] } }))
    if (id === '10') { return await res(ctx.json({ data: { results: [comicWithoutStock] } })) }
    return await res(ctx.json({ data: { results: [] } }))
  }),
  rest.get('/marvel/api/characters/:id', async (req, res, ctx) => {
    const id = req.params.id
    if (id === '1') return await res(ctx.json({ data: { results: [character] } }))
    return await res(ctx.json({ data: { results: [] } }))
  })
]

export { handlers }
