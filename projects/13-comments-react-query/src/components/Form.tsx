export const FormInput = ({ ...props }) => (
  <div className='mb-6'>
    <label htmlFor='default-input' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Write a title</label>
    <input name='title' type='text' id='default-input' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='What are you thinking?' />
  </div>
)

export const FormTextArea = ({ ...props }) => (
  <textarea name='message' id='message' rows={4} className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500' placeholder='I am just trying to say...' />
)
