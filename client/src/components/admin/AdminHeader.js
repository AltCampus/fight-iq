import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class AdminHeader extends Component {
    render() {
        return (
            <div className="AdminHeader">
        <Link to="/admin">Events</Link>
        <Link to="/admin/players">Players</Link>
        <Link to="/admin/event">Add event</Link>
        <Link to="/admin/players/add">Add Player</Link>
      </div>
        );
    }
}

export default AdminHeader;