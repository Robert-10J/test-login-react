type TypeAlert = 'alert-primary' | 'alert-success' | 'alert-warning' | 'alert-danger';

type Props = {
  children: React.ReactNode
  typeAlert: TypeAlert
};

const Alert: React.FC<Props> = ({ children, typeAlert }) => {
  return (
    <div className={`alert ${typeAlert} mt-4 mb-4`} role='alert'>
      {children}
    </div>
  );
}

export default Alert