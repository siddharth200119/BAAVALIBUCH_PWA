import getNodes
import networkx as nx

map = getNodes.final_map

nodesAndEdges = []

for node, edges in map.items():
    for edge in edges:
        nodesAndEdges.append((node, edge))

Graph = nx.Graph()

Graph.add_edges_from(nodesAndEdges)

node_list = Graph.nodes()
edge_list = Graph.edges()

print("number of nodes: " + str(len(node_list)) + " number of edges: " + str(len(edge_list)))

#degree of nodes

for node in node_list:
    print("degree of node " + node + ": " + str(Graph.degree(node)))