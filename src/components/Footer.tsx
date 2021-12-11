const style = {
    bottom: '0.5rem',
    color: 'rgb(123 123 123)',
    left: '1rem',
    position: 'absolute' as 'absolute',
    width: '100%',
};

export default function Footer() {
    return <div style={style}>&copy; {new Date().getFullYear()} Isaac Sanchez</div>;
}
