'use client'
import React from 'react';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const SearchFlight = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (

    <>
      <div className="w-full h-screen relative">
        <video muted autoPlay loop src="/video.mp4" className="w-full h-full object-cover"></video>
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-screen-lg">
        <div className="w-full bg-white rounded-2xl shadow-md mx-auto p-4">
          <div className="space-y-4">
            <div className="text-black space-x-4 flex">
        
              <fieldset className='flex gap-3'>
                <div>

                <legend className="text-md mr-5 font-semibold leading-6 text-gray-900">Vuelos</legend>
                </div>
                  <div className="flex  items-center gap-x-3">
                    <input
                      id="push-everything"
                      name="push-notifications"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                      Ida y Regreso
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="push-email"
                      name="push-notifications"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                      Solo Ida
                    </label>
                  </div>
                  
              </fieldset>
            </div>

            <div className="flex gap-4 text-black">
              <div className="w-full  sm:w-1/2 md:w-1/5">
                <label className="inline-flex items-center text-gray-900 text-sm font-medium mb-1">Origen:</label>

                <Menu as="div" className="relative block text-left">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                      Options
                      <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Account settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Support
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              License
                            </a>
                          )}
                        </Menu.Item>
                        
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>

              <div className="w-full sm:w-1/2 md:w-1/5">
                <label className="inline-flex items-center text-gray-900 text-sm font-medium mb-1">Destino:</label>
                <Menu as="div" className="relative block text-left">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                      Options
                      <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Account settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Support
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              License
                            </a>
                          )}
                        </Menu.Item>
        
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>

              <div className="w-full sm:w-1/2 md:w-1/5">
                <label className="inline-flex items-center text-gray-900 text-sm font-medium mb-1">Fecha de Ida:</label>
                <input type="date" className="w-full  border-0 border-gray-300  focus:outline-none focus:border-gray-500 inline-flex  justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" />
              </div>

              <div className="w-full sm:w-1/2 md:w-1/5">
                <label className="inline-flex items-center text-gray-900 text-sm font-medium mb-1">Fecha de Regreso:</label>
                <input type="date" className="w-full  border-0 border-gray-300  focus:outline-none focus:border-gray-500 inline-flex  justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" />
              </div>

              <div className="w-full sm:w-1/2 md:w-1/5 flex items-end justify-center">

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold  w-72 py-2 px-2 h-10 rounded-lg  text-md">
                  Buscar
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}
export default SearchFlight