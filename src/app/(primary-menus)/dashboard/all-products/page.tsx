import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
 
  
  const DashboardAllProduct = async () => {
    const res = await fetch(`https://l2-ass-8-server.vercel.app/api/v1/cloth`, {
      cache: "no-store",
    });
  
    const clothes = await res.json();
  
    const discountedPriceGenerator = (price: number, discount: number) => {
      const discountedPrice = (price - price * (discount / 100)).toFixed(2);
      return discountedPrice;
    };
  
    return (
      <div>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">No.</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Brand</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Discount</TableHead>
              <TableHead>Discounted Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clothes?.data?.map((cloth: any, index: number) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{cloth?.name}</TableCell>
                <TableCell>{cloth?.brand}</TableCell>
                <TableCell>{cloth?.price}</TableCell>
                <TableCell>{cloth?.discount}</TableCell>
                <TableCell>
                  {discountedPriceGenerator(cloth?.price, cloth?.discount)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  };
  
  export default DashboardAllProduct;