import alt from '../alt';

class CartActions {
  add(id) {
    this.dispatch(id);
  }

  remove(id) {
    this.dispatch(id);
  }

  clear() {
    this.dispatch();
  }

  checkout() {
    this.actions.clear();
  }
}

export default alt.createActions(CartActions);
