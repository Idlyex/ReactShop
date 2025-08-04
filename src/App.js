import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: "Стол деревянный",
          img: "table.jpg",
          desc: "Lorem ipsum dolor sit amet",
          price: 59.99,
          category: "tables",
        },
        {
          id: 2,
          title: "Стул деревянный",
          img: "chair.jpg",
          desc: "Lorem ipsum dolor sit amet",
          price: 29.99,
          category: "chairs",
        },
        {
          id: 3,
          title: "Растение",
          img: "plant.jpg",
          desc: "Lorem ipsum dolor sit amet",
          price: 19.99,
          category: "plants",
        },
        {
          id: 4,
          title: "Ковер",
          img: "sofajpg.jpg",
          desc: "Lorem ipsum dolor sit amet",
          price: 89.99,
          category: "sofas",
        },
      ],
      currentItems: [],
      orders: [],
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          items={this.state.currentItems}
          onAdd={this.addToOrder}
          onShowItem={this.onShowItem}
        />
        <Footer />
      </div>
    );
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }

    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({
      orders: this.state.orders.filter((el) => el.id !== id),
    });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
