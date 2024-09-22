export default function InputGroup({ children, className = '', ...props }) {
    return (
        <div {...props} className= {"" + className}>
            {children}
        </div>
    )
}
