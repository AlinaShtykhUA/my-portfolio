import { Link, useMatch } from 'react-router-dom';

const CustomLink = ({children, to, ...props}) => {
    const match = useMatch({
        path: to,
        end: to.length === 1,
    });

    return (
        <Link
            to={to}
            style={{
                color: match ? '#6AE0FF' : '#191E2B',
                textShadow: match ? 'none' : '-1px 0 #6AE0FF, 0 1px #6AE0FF, 1px 0 #6AE0FF, 0 -1px #6AE0FF',
            }}
            {...props}
        >
            {children}
        </Link>
    )
}

export {CustomLink}
