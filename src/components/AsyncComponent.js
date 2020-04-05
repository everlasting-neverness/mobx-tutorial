import React, { Component } from 'react';
import { observable, configure, action, decorate, runInAction } from 'mobx';
import { observer } from 'mobx-react';

configure({ enforceActions: 'observed' });

export class Store {
    user: null;

    getUser() {
        fetch('https://randomuser.me/api/')
            .then((res) => res.json())
            .then((json) => {
                if (json.results) {
                    // this.setUser(json.results[0]);
                    runInAction(() => {
                        this.user = json.results[0];
                    })
                }
            });
    }

    setUser(user) {
        this.user = user;
    }
}

decorate(Store, {
    user: observable,
    getUser: action.bound,
    setUser: action,
});

@observer
class AsyncComponent extends Component {
    render() {
        const { store } = this.props;

        return <div>
            <h1>{store.user ? store.user.login.username : 'no user'}</h1>
            <button onClick={store.getUser}>Get User</button>
        </div>;
    }
}

export default AsyncComponent;
