import React from 'react';
import axios from 'axios';
import { Card, Table } from 'react-bootstrap';
import Navigationbar from '../../components/Header/Navigationbar';

/*
Defines the data page of the app
*/

class Data extends React.Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
      isLoading: true,
      errors: null,
    };
  }

  async getTransactions() {
    // TODO: Don't fetch all txs, bottleneck if many txs in db
    const response = await axios.get('/transactions');
    console.log('transactions being fetched:', response.data);

    this.setState({
      transactions: response.data,
      isLoading: false,
    });
  }

  componentDidMount() {
    this.getTransactions();
  }

  // TODO: better table formatting
  render() {
    const { isLoading, transactions } = this.state;
    return (
      <div>
        <Navigationbar />
        <React.Fragment>
          <h2>Past txs</h2>
          <div>
            {!isLoading ? (
              <div>
                <Table striped bordered variant="dark">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>userID</th>
                      <th>transactionHash</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map(transaction => {
                      const { name, username, transactionHash } = transaction;
                      return (
                        <tr>
                          <div key={transactionHash}>
                            <td>{name}</td>
                            <td>{username}</td>
                            <td>{transactionHash}</td>
                          </div>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default Data;
