import createInputs from './createInputs'
import createInputCreator from './createInputCreator'
import { Field } from 'redux-form'

export {
  Input,
  Select,
  Switch
} from createInputs(createInputCreator(Field))
