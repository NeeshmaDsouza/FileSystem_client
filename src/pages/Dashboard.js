import React, { useState, useEffect } from "react";

import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

export function Dashboard() {
    let [fileTree, setFileTree] = useState([])
    useEffect(() => {
        const fetchData = async (parent={dirPath:'root'}) => {
            try {
                console.log("running")
                const response = await fetch('http://localhost:8080/filesApi/file');
                const result = await response.json();
                let fileList = result.response;
                fileList = fileList.map((item) => {
                    return {...item, dirPath: `${parent.dirPath}/${item.name}`, children: [], isLoaded: false}
                })
                console.log(fileList)
                setFileTree(fileList);
            } catch (error) {
          
            }
          };
      
          fetchData();
    }, [])

    const [expanded, setExpanded] = React.useState([]);
    const handleChange = (event, nodes) => {
        const expandingNodes = nodes.filter(x => !expanded.includes(x));
        setExpanded(nodes);

        console.log("expandingNodes", expandingNodes)
        if (expandingNodes[0]) {
          const childId = expandingNodes[0];
        //   fetchChildNodes(childId).then(result =>
        //     setChildNodes(
        //       result.children.map(node => (
        //         <MyTreeItem key={node.id} {...node}  />
        //       ))
        //     )
        //   );
        }
      };
    
    return (
        <Box sx={{ minHeight: 180, flexGrow: 1, maxWidth: 300, padding: "100px" }}>
        <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            onNodeToggle={handleChange}
        >
            {  
                fileTree.map((file) => {
                    // if(file.fileType === 'directory')
                    return <TreeItem key={file.dirPath} nodeId={file.dirPath} label={file.name}>
                        {/* {file.fileType === 'directory' ? } */}
                        {
                            // Separate component needs to be created so the child items cann be called recursively
                        }
                        </TreeItem>
                })
            }

            {/* <TreeItem nodeId="1" label="Applications">
            <TreeItem nodeId="2" label="Calendar" />
            </TreeItem>
            <TreeItem nodeId="5" label="Documents">
            <TreeItem nodeId="10" label="OSS" />
            <TreeItem nodeId="6" label="MUI">
                <TreeItem nodeId="8" label="index.js" />
            </TreeItem>
            </TreeItem> */}
        </TreeView>
        </Box>
    );
}
