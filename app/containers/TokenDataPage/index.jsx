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

class TokenData extends React.Component {
  constructor() {
    super();
    this.state = {
      tokens: [],
      isLoading: true,
    };
  }

  async getTokens() {
    const response = await axios.get('/api/contracts');

    this.setState({
      tokens: response.data,
      isLoading: false,
    });
  }

  componentDidMount() {
    this.getTokens();
  }

  render() {
    const { isLoading, tokens } = this.state;
    return (
      <div>
        <React.Fragment>
          {!isLoading ? (
            <Card>
              <Card.Body>
                <Card.Title>
                  Your most recent Cryptocurrency Token Deployments
                </Card.Title>
                <Table striped bordered variant="dark">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>username</th>
                      <th>Transaction Hash</th>
                      <th>Contract address</th>
                      <th>netname</th>
                      <th>createdAt</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tokens.map(token => (
                      <tr key={token.txHash}>
                        <td
                          onClick={() => {
                            history.push(`/receipt/token/${token.txHash}`);
                          }}
                        >
                          {token.name}
                        </td>
                        <td>{token.username}</td>
                        <td>{token.txHash}</td>
                        <td>{token.address}</td>
                        <td>{token.netname}</td>
                        <td>{token.createdAt}</td>
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

export default TokenData;
