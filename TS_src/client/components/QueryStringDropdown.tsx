import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'


export default function QueryStringDropdown({queryString}: { queryString: string }) {
  function indentQueryLines(linesArray: string[]) {
    let indentLevel = 0;
    const indentedLinesArray = [];
  
    for (const line of linesArray) {
      const trimmedLine = line.trim();
  
      if (!trimmedLine) {
        continue;
      }
  
      if (trimmedLine.endsWith('{')) {
        indentedLinesArray.push('  '.repeat(indentLevel) + trimmedLine);
        indentLevel++;
      } else if (trimmedLine.endsWith('}')) {
        indentLevel--;
        indentedLinesArray.push('  '.repeat(indentLevel) + trimmedLine);
      } else {
        indentedLinesArray.push('  '.repeat(indentLevel) + trimmedLine);
      }
    }
  
    return indentedLinesArray;
  }

  function queryToLinesArray(queryString: string) {
    const linesArray = queryString.trim().split('\n').map(line => line.trim());
    return linesArray;
  }

  const queryArr = indentQueryLines(queryToLinesArray(queryString))
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
          View
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 z-10 mt-2 w-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='py-1'>
            {queryArr.map((line, i) => {
              return (
                <Menu.Item key={i}>
                  <a className='text-gray-700 block px-4 py-0 text-xs whitespace-pre'>
                    {line}
                  </a>
                </Menu.Item>
              )
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}