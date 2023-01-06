import React from 'react'
import { Disclosure } from '@headlessui/react'
type Props = {}

const Accordion = (props: Props) => {
  return (
    <div>    <Disclosure>
    <Disclosure.Button className="py-2">
      Is team pricing available?
    </Disclosure.Button>
    <Disclosure.Panel className="text-gray-500">
      Yes! You can purchase a license that you can share with your entire
      team.
    </Disclosure.Panel>
  </Disclosure>
</div>
  )
}

export default Accordion