import React from 'react';
import axios from 'axios';
import { Card, Table } from 'react-bootstrap';
import history from '../../utils/history';

/*
Defines the data page of the app
*/

// TODO: change function's file structure
async function asyncForEach(array, callback) {
  // TODO: find more elegant solution
  for (let index = 0; index < array.length; index += 1) {
    await callback(array[index], index, array);
  }
}

class TransactionData extends React.Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
      isLoading: true,
    };
  }

  async getTransactions() {
    const response = await axios.get('/api/transactions');

    this.setState({
      transactions: response.data,
      isLoading: false,
    });
  }

  componentDidMount() {
    this.getTransactions();
  }

  render() {
    const { isLoading, transactions } = this.state;
    return (
      <div>
        <React.Fragment>
          {!isLoading ? (
            <Card>
              <Card.Body>
                <Card.Title>Your most recent Transactions</Card.Title>
                <Table striped bordered variant="dark">
                  <thead>
                    <tr>
                      <th>Contract</th>
                      <th>username</th>
                      <th>Amount</th>
                      <th>Sender</th>
                      <th>Receiver</th>
                      <th>netname</th>
                      <th>createdAt</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map(transaction => (
                      <tr key={transaction.txHash}>
                        <td
                          onClick={() => {
                            history.push(
                              `/receipt/transaction/${transaction.txHash}`,
                            );
                          }}
                        >
                          {transaction.contract.name}
                        </td>
                        <td>{transaction.username}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.sender}</td>
                        <td>{transaction.receiver}</td>
                        <td>{transaction.netname}</td>
                        <td>{transaction.createdAt}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          ) : (
            <p>Loading...</p>
          )}
        </React.Fragment>
      </div>
    );
  }
}

export default TransactionData;
