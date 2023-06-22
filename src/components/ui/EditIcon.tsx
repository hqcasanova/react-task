/* eslint-disable react/jsx-props-no-spreading */

import { SVGAttributes } from 'react';

function EditIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 22 22'
      {...props}
    >
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M14.879.879 6.293 9.464a1 1 0 0 0-.293.708v4a1 1 0 0 0 1 1h4a1 1 0 0 0 .707-.293l8.586-8.586a3 3 0 0 0 0-4.243L19.12.88a3 3 0 0 0-4.242 0Zm4 2.585.083.095a1 1 0 0 1-.083 1.32l-8.295 8.293H8v-2.586l8.293-8.293a1 1 0 0 1 1.414 0l1.172 1.171ZM10.03 2.172a1 1 0 0 0-1-1H5l-.217.004A5 5 0 0 0 0 6.172v10l.005.216A5 5 0 0 0 5 21.172h10l.217-.005A5 5 0 0 0 20 16.172v-4.919l-.007-.116a1 1 0 0 0-1.993.116v4.919l-.005.176A3 3 0 0 1 15 19.172H5l-.176-.006A3 3 0 0 1 2 16.172v-10l.005-.177A3 3 0 0 1 5 3.172h4.03l.117-.007a1 1 0 0 0 .884-.993Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default EditIcon;
