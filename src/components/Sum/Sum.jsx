export const Sum = (props) => {
  const { a, b } = props;

  return (
    <p>Sum of {a || 0} and {b || 0} is {a || 0 + b || 0}</p>
  );
};
