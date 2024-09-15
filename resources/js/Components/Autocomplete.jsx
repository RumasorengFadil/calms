import { debounce } from 'lodash';

export default Autocomplete = ({ onSearch = () =>{}, placeholder = "" }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const fetchResults = debounce((q) => {
        onSearch(q).then(setResults);
    }, 300);

    return (
        <div className="autocomplete-container">
            <input
                type="text"
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value);
                    fetchResults(e.target.value);
                }}
                placeholder={placeholder}
            />
            <ul>
                {results.map((result) => (
                    <li key={result.id}>{result.name}</li>
                ))}
            </ul>
        </div>
    );
};