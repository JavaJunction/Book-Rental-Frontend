// function Header() {
//   return (
//     <header>
//       <h1>Book Exchange Platform</h1>
//       <p>Share books and knowledge with others!</p>
//     </header>
//   );
// }


const Header = () => {
    return (
        <header className="header-bar">
            <div className="header-left">
                <h1 className="header-title">BookSwap</h1>
            </div>
            <div className="header-middle">
                <nav className="nav-tabs">
                    <button className="tab-button">List Your Books</button>
                    <button className="tab-button">Search For</button>
                    <button className="tab-button">Exchange</button>
                </nav>
            </div>
            <div className="header-right">
                <button className="action-button">List</button>
                <button className="action-button">Search</button>
            </div>

            <div className="below-header-box">
                <div className="content-box">
                    <div className="content-text">
                        <h1 >Explore Books on BookSwap</h1>
                        <h2>Discover books near you!</h2>
                    </div>
                </div>

                <div className="horizontal-box">
                    {/* This box will span horizontally across the bottom */}
                    <p>Horizontal box content goes here.</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
