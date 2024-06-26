import { Search } from 'lucide-react';
import type { ChangeEvent } from 'react';
import { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="sticky top-12 z-10 w-full backdrop-blur-md dark:bg-blue-950/10">
      <section className="flex items-center justify-between p-2">
        <div className="flex w-full items-center">
          <input
            className="w-full rounded bg-slate-50 py-2 pl-2 text-black dark:bg-slate-900 dark:text-white"
            placeholder="Search"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <Search className="-ml-9 cursor-pointer text-slate-500 opacity-50 dark:text-white" />
        </div>
      </section>
    </div>
  );
};

export default SearchBar;
