import { action } from 'typesafe-actions'
import { EModelEvent, EVENT_TYPES } from '../constant'

export const search = (value: string) =>
  action(
    EModelEvent.SEARCH_MODEL,
    {
      model: {
        value,
      },
    },
    { channel: EVENT_TYPES.API, remote: false }
  )
