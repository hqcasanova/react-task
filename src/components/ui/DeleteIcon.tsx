/* eslint-disable react/jsx-props-no-spreading */

import { SVGAttributes } from 'react';

function DeleteIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 22'
      {...props}
    >
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M12 0a3 3 0 0 1 2.995 2.824L15 3v1h4a1 1 0 0 1 .117 1.993L19 6h-1v13a3 3 0 0 1-2.824 2.995L15 22H5a3 3 0 0 1-2.995-2.824L2 19V6H1a1 1 0 0 1-.117-1.993L1 4h4V3A3 3 0 0 1 7.824.005L8 0h4ZM4 6v13a1 1 0 0 0 .883.993L5 20h10a1 1 0 0 0 .993-.883L16 19V6H4Zm9-2H7V3l.007-.117A1 1 0 0 1 8 2h4l.117.007A1 1 0 0 1 13 3v1ZM8 9a1 1 0 0 1 .993.883L9 10v6a1 1 0 0 1-1.993.117L7 16v-6a1 1 0 0 1 1-1Zm4.993.883A1 1 0 0 0 11 10v6l.007.117A1 1 0 0 0 13 16v-6l-.007-.117Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default DeleteIcon;
