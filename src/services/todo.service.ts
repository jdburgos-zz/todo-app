/** Dependencies **/
import { child, get, ref, remove, set, update } from 'firebase/database';
import { v1 as uuidV1 } from 'uuid';

/** Config **/
import { database } from '../config/firebase';

/** Types **/
import { TodoType } from '../types/todo.type';

const db = database;
const dbPath = '/todos';

class TodoDataService {
  getAll() {
    return get(child(ref(db), dbPath));
  }

  create(todo: TodoType) {
    const id = uuidV1();

    return set(ref(db, `${dbPath}/${id}`), todo);
  }

  update(id: string | undefined, value: { active: boolean }) {
    return update(ref(db, `${dbPath}/${id}`), value);
  }

  delete(id: string | undefined) {
    return remove(ref(db, `${dbPath}/${id}`));
  }

  deleteAll() {
    return remove(ref(db, `${dbPath}`));
  }

  deleteCompleted(todo: TodoType[]) {
    for (const element of todo) {
      const { id, active } = element;

      !active && this.delete(id);
    }
  }
}

export default new TodoDataService();
