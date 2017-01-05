import createInputs from './createInputs'
import createInputCreator from './createInputCreator'
import { Field } from 'redux-form/immutable'

const {
  Input,
  Select,
  Switch
} = createInputs(createInputCreator(Field))

export {
  Input,
  Select,
  Switch
}
