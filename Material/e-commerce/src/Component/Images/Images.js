import React from 'react'
import Style from "./Images.module.css"
export default function Images() {
  return (
   <>
    <div className={Style.main}>
      <h6 className={Style.Featured}>Featured</h6>
      <h2 className={Style.Arrival}>New Arrival </h2>
    </div>
     <div className="grid mt-5 grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src="/ITEM/items (7).jpg" alt="" />
          </div>
          <div>
          <img className="h-auto max-w-full rounded-lg" src="/ITEM/items (8).jpg" alt="" />
          </div>
          <div>
          <img className="h-auto max-w-full rounded-lg" src="/ITEM/items (6).jpg" alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
          <img className="h-auto max-w-full rounded-lg" src="/ITEM/item.jpg" alt="" />
          </div>
          <div>
          <img className="h-auto max-w-full rounded-lg" src="/ITEM/items (15).jpg" alt="" />
          </div>
          <div>
          <img className="h-auto max-w-full rounded-lg" src="/ITEM/items (12).jpg" alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
          <img className="h-auto max-w-full rounded-lg" src="/ITEM/items (9).jpg" alt="" />
          </div>
          <div>
          <img className="h-auto max-w-full rounded-lg" src="/ITEM/items (4).jpg" alt="" />
          </div>
          <div>
          <img className="h-auto max-w-full rounded-lg" src="/ITEM/items (5).jpg" alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
          <img className="h-auto max-w-full rounded-lg" src="/ITEM/items (1)1.jpg" alt="" />
          </div>
          <div>
          <img className="h-auto max-w-full rounded-lg" src="/ITEM/items (13).jpg" alt="" />
          </div>
          <div>
          <img className="h-auto max-w-full rounded-lg" src="/ITEM/items (30).jpg" alt="" />
          </div>
        </div>
      </div>
   
   
   </>
  )
}
