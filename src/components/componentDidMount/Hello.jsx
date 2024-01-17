import React, { Component } from 'react';

class Hello extends Component {
  state = {
    data: [],
    buttonClickCount: 0
  }

  async componentDidMount() {
    await this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      console.log(data);
      this.setState({ data: data.splice(0, 50) });
    } catch (error) {
      console.log("error", error);
    }
  }

  handleButtonClick = () => {
    const { buttonClickCount } = this.state;
    if (buttonClickCount % 2 === 0) {
      this.setState({ data: [] });
    } else {
      this.fetchData();
    }
    this.setState((prevState) => ({ buttonClickCount: prevState.buttonClickCount + 1 }));
  }

  render() {
    console.log('render method called');
    const { data } = this.state;
    return (
      <div className='Didmount'>
        <h2 className='Didmount-heading'>Thực hành ComponentDidMount </h2>
        <button onClick={this.handleButtonClick}>
          {this.state.buttonClickCount % 2 === 0 ? 'Xóa Dữ Liệu' : 'Gọi API Lại'}
        </button>
        <ul>
          {data.map((item) => {
            return <li key={item.id}>{item.title}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default Hello;
