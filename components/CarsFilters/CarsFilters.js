'use client'

import React, {useRef, useEffect, useCallback, useState} from 'react'
import {Collapse, Form, Select} from "antd";
import {AiFillFilter} from "react-icons/ai";
import {StyledButton} from "@/components/StyledButton/StyledButton";
import {FiX} from "react-icons/fi";

const CarsFilters = (props) => {

    const {} = props
    const filtersRef = useRef(null)
    const overlayRef = useRef(null)
    const [open, setOpen] = useState(false)

    const {Panel} = Collapse;
    const {Option} = Select;


    let onToggleFilters = useCallback(()=> {
        if(filtersRef.current){
            let elem = filtersRef.current
            let overlay = overlayRef.current
            console.log(filtersRef.current.classList)
            if(elem.classList.contains("open_filters")){
                elem.classList.remove("open_filters")
                overlay.classList.add('exit_filter_overlay')
                let timer = setTimeout(()=> {
                    overlay.classList.remove('exit_filter_overlay')
                    setOpen(false)
                }, 300)
                return ()=> clearTimeout(timer)

            }else {
                setOpen(true)
                elem.classList.add("open_filters")
            }
        }
    },[filtersRef])






    const filters = [
      {
          label: 'Locations',
          name:'locations',
          key:1
      },
      {
          label: 'Car Brand / Model',
          name:'car_brand_model',
          key:2
      },
      {
          label: 'Model Year',
          name:'Locations',
          key:3
      }
  ]

  return (
      <>
          <StyledButton className={"filter_toggle icon"} onClick={onToggleFilters}>
              {!open ? <AiFillFilter/> : <FiX/>}
          </StyledButton>
          {open && <div onClick={onToggleFilters} ref={overlayRef} className={"filters_overlay"}></div>}
          <div ref={filtersRef} className={"filters_container"}>
              <Form >
                  <h2 className={'flex_start'}>Filters <AiFillFilter className={"ml_10"}/></h2>
                  <Collapse bordered={false} defaultActiveKey={['1']}>
                      {
                          filters.map((item)=> (
                              <Panel header={item.label} key={`${item.key}`}>
                                  <Form.Item name={item.name} className={"styled_select"}>
                                      <Select defaultValue={'Select'}>
                                          <Option value={'1'}>Dubai</Option>
                                      </Select>
                                  </Form.Item>
                              </Panel>
                          ))
                      }
                  </Collapse>;
              </Form>
          </div>

      </>
  )
}

export default CarsFilters