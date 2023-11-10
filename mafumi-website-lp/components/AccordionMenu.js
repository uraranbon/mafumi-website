import { useState } from 'react'
import { motion, useAnimationControls } from "framer-motion"

export default function AccordionMenu({title,content}) {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    if (isExpanded) {
      controls.start({
        height: '0px',
      });
    } else {
      controls.start({
        height: '100%',
      });
    }

    setIsExpanded(!isExpanded);
  };

  const controls = useAnimationControls();

  return (
    <div className='accordionWrap'>
      <h2 className="accordionTitle" onClick={toggleExpanded}>{title}</h2>
      <motion.div
        initial={{ height: '0px' }}
        className="accordion"
        animate={controls}
        transition={{ duration: 0.3 }}
      >
        {content}
      </motion.div>
    </div>
  )
}