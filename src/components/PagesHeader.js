import {Link as LinkRouter} from 'react-router-dom'

const pagesUser = [
    {_id: 101, name: 'Home', linkTo: '/'},
    {_id: 102, name: 'Cities', linkTo: '/cities'}
]

const pagesAdmin = [
    {_id: 101, name: 'Home', linkTo: '/'},
    {_id: 102, name: 'Cities', linkTo: '/cities'},
    {_id: 103, name: 'NewCity', linkTo: '/newcity'},
    {_id: 104, name: 'EditCity', linkTo: '/editcity'}
]

const linkCreator = (page) => <LinkRouter key={page._id} className="Header-link" to={page.linkTo}>{page.name}</LinkRouter>

export default function PagesHeader(props) {
    const pages = props.logged? pagesAdmin : pagesUser

    return (
        <>
            {pages.map(linkCreator)}
        </>
    )
}