import React from 'react'
import { Table, TableCaption, TableHead, TableHeader, TableRow, TableBody, TableCell } from '../ui/table'
import { Badge } from '../ui/badge'

const AppliedJobsTable = () => {
  return (
    <div>
        <Table>
            <TableCaption>
                A List of your applied jobs
            </TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Job Role</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    [1,2].map((item, index)=>(
                        <TableRow>
                            <TableCell>
                                17-07-2024
                            </TableCell>
                            <TableCell>
                                Frontend  Developer
                            </TableCell>
                            <TableCell>
                                Suresh Tempo
                            </TableCell>
                            <TableCell className="text-right">
                                <Badge className="bg-black" variant="ghost">Selected</Badge>
                            </TableCell>
                        </TableRow>
                    ))
                }
                
            </TableBody>
        </Table>
    </div>
  )
}

export default AppliedJobsTable