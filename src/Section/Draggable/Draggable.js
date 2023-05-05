import { motion, AnimatePresence,useMotionValue } from 'framer-motion';
import './Draggable.css';
import { useState } from 'react';
import image from "./image"
import DraggableComponents from "./DraggableComponents/DraggableComponents"
const Draggable = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const x = useMotionValue(0)
  const handleDragEnd = () => {
    console.log("Drag ended")
  
    // Calculate the total width of the images
    const totalWidth = image.length * 200
  
    // If the current value of x is greater than or equal to the total width of the images,
    // set the current index to 0 and set x to 0
    if (x.get() >= totalWidth) {
      console.log("Setting current index to 0")
      setCurrentIndex(0)
      x.set(0)
    }
  
    // If the current value of x is less than 0, set the current index to the last image
    // in the array and set x to the total width of the images minus 200
    if (x.get() < 0) {
      console.log("Setting current index to last image in array")
      setCurrentIndex(image.length - 1)
      x.set(totalWidth - 200)
    }
  
    console.log(`currentIndex: ${currentIndex}`)
  }
  
  return (
    <div className='Project-container container drag-container'>
      <div className='hidden-part'>
      <motion.div
                drag="x"
                onDragEnd={handleDragEnd}
                className="card-handler"
                style={{
                  x,
                  overflow: "hidden",
                }}
              >
<AnimatePresence exitBeforeEnter>
  {image.map((img, index) => {
    // If the current index is equal to the index of the image, display the image
    if (index === currentIndex) {
      return (
        <motion.div
          className="item"
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <DraggableComponents img={img} />
        </motion.div>
      )
    }
  })}
</AnimatePresence>

        </motion.div>

      </div>
    </div>
  );
};

export default Draggable