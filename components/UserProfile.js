export default function UserProfile({ user }) {
  return (
    <div className="box-center">
      <img
        src={
          user.photoURL || "https://c.tenor.com/JO2Ih5fvExAAAAAM/elon-musk.gif"
        }
        className="card-img-center"
      />
      <p>
        <i>@{user.username}</i>
      </p>
      <h1>{user.displayName || "Anonymous User"}</h1>
    </div>
  );
}
