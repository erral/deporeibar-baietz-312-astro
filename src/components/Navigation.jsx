const Navigation = (props) => {
  console.log('props', props);
  return (
    <nav id="main-navigation">
      <ul>
        <li>
          <a href="/">Hasiera</a>
        </li>
        <li>
          <a href="/mendiak">Mendiak</a>
        </li>
        <li>
          <a href="/honi-buruz">Honi buruz</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
