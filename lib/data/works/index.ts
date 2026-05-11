import { flux } from './flux'
import { nucleus } from './nucleus'
import { relic } from './relic'
import type { Work } from './types'

export type { Work, WorkImage } from './types'

export const WORKS: Work[] = [flux, relic, nucleus]
