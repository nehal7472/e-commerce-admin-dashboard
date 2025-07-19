import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown } from "lucide-react";

const STATUS_COLORS = {
  Pending: "text-orange-500",
  Shipping: "text-blue-500",
  Completed: "text-green-600",
  Refund: "text-yellow-500",
};

const getRandomStatus = () => {
  const statuses = ["Pending", "Shipping", "Completed", "Refund"];
  return statuses[Math.floor(Math.random() * statuses.length)];
};

const ProductTable = ({ name }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [statusFilter, setStatusFilter] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        const enriched = data.map((product) => ({
          ...product,
          status: getRandomStatus(),
        }));
        setProducts(enriched);
        setFilteredProducts(enriched);
      });
  }, []);

  useEffect(() => {
    let filtered = [...products];
    if (categoryFilter) {
      filtered = filtered.filter((p) => p.category.name === categoryFilter);
    }
    if (statusFilter) {
      filtered = filtered.filter((p) => p.status === statusFilter);
    }
    setFilteredProducts(filtered);
  }, [categoryFilter, statusFilter, products]);

  const categories = [...new Set(products.map((p) => p.category.name))];
  const statuses = Object.keys(STATUS_COLORS);

  return (
    <div className="p-4 sm:p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-md transition-colors">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
          {name}
        </h2>
        <div className="flex gap-2 flex-wrap">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-1">
                Category
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setCategoryFilter(null)}>
                All
              </DropdownMenuItem>
              {categories.map((cat) => (
                <DropdownMenuItem
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                >
                  {cat}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-1">
                Status
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setStatusFilter(null)}>
                All
              </DropdownMenuItem>
              {statuses.map((status) => (
                <DropdownMenuItem
                  key={status}
                  onClick={() => setStatusFilter(status)}
                >
                  {status}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="overflow-x-auto rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-gray-600 dark:text-gray-300">
                Product
              </TableHead>
              <TableHead className="text-gray-600 dark:text-gray-300">
                Category
              </TableHead>
              <TableHead className="text-gray-600 dark:text-gray-300">
                Price
              </TableHead>
              <TableHead className="text-gray-600 dark:text-gray-300">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow
                key={product.id}
                className="hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
              >
                <TableCell className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={product.images[0]} alt={product.title} />
                  </Avatar>
                  <span className="font-medium text-gray-800 dark:text-white">
                    {product.title}
                  </span>
                </TableCell>
                <TableCell className="text-gray-700 dark:text-gray-300">
                  {product.category.name}
                </TableCell>
                <TableCell className="text-gray-700 dark:text-gray-300">
                  ${product.price.toFixed(2)}
                </TableCell>
                <TableCell>
                  <span
                    className={`text-sm font-medium ${
                      STATUS_COLORS[product.status]
                    }`}
                  >
                    {product.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ProductTable;
