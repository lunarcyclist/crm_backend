import React, { useState, useEffect } from "react";
import "./CustomerManagement.css";

const CustomerManagement = () => {
  const [customers, setCustomers] = useState([]);
  const [customer, setCustomer] = useState({ name: "", email: "", totalSpending: "", lastVisit: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/customers/all-customers");
      const data = await response.json();
      setCustomers(data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  const handleAddCustomer = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/customers/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(customer),
      });
      if (response.ok) {
        alert("Customer added successfully");
        fetchCustomers();
      }
    } catch (error) {
      console.error("Error adding customer:", error);
    }
  };

  const handleEditCustomer = (customer) => {
    setIsEditing(true);
    setEditingCustomer(customer);
    setCustomer({ ...customer });
  };

  const handleUpdateCustomer = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/customers/update/${editingCustomer.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(customer),
      });
      if (response.ok) {
        alert("Customer updated successfully");
        fetchCustomers();
        setIsEditing(false);
        setCustomer({ name: "", email: "", totalSpending: "", lastVisit: "" });
      }
    } catch (error) {
      console.error("Error updating customer:", error);
    }
  };

  const handleDeleteCustomer = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/customers/delete/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("Customer deleted successfully");
        fetchCustomers();
      }
    } catch (error) {
      console.error("Error deleting customer:", error);
    }
  };

  return (
    <div className="customer-management">
      <h1>Customer Management</h1>

      {/* Add Customer Form */}
      <form onSubmit={handleAddCustomer}>
        <h2>Add Customer</h2>
        <input
          type="text"
          placeholder="Name"
          value={customer.name}
          onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={customer.email}
          onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Total Spending"
          value={customer.totalSpending}
          onChange={(e) => setCustomer({ ...customer, totalSpending: e.target.value })}
          required
        />
        <input
          type="date"
          placeholder="Last Visit"
          value={customer.lastVisit}
          onChange={(e) => setCustomer({ ...customer, lastVisit: e.target.value })}
          required
        />
        <button type="submit">Add Customer</button>
      </form>

      {/* Update Customer Modal */}
      {isEditing && (
        <div className="modal">
          <div className="modal-content">
            <h2>Update Customer</h2>
            <form onSubmit={handleUpdateCustomer}>
              <input
                type="text"
                placeholder="Name"
                value={customer.name}
                onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={customer.email}
                onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                required
              />
              <input
                type="number"
                placeholder="Total Spending"
                value={customer.totalSpending}
                onChange={(e) => setCustomer({ ...customer, totalSpending: e.target.value })}
                required
              />
              <input
                type="date"
                placeholder="Last Visit"
                value={customer.lastVisit}
                onChange={(e) => setCustomer({ ...customer, lastVisit: e.target.value })}
                required
              />
              <button type="submit">Update Customer</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}

      {/* Customer Table */}
      <h2>Customer List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Total Spending</th>
            <th>Visit Count</th>
            <th>Last Visit</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((cust) => (
            <tr key={cust.id}>
              <td>{cust.id}</td>
              <td>{cust.name}</td>
              <td>{cust.email}</td>
              <td>{cust.totalSpending}</td>
              <td>{cust.visitCount}</td>
              <td>{cust.lastVisit}</td>
              <td>
                <button onClick={() => handleEditCustomer(cust)} className="update-button">Update</button>
                <button onClick={() => handleDeleteCustomer(cust.id)} className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerManagement;
